// data
let carousel = [
  {id : 0,
  comment : '설레는 여행, 여행 플래너와 함께 즐겨보세요!'},
  {id : 1,
  comment : '당신의 여행 성향은 어떤가요? 본인 성향에 따라 플래너를 이용해 보세요!'},
  {id : 2,
  comment : '본인 성향에 맞게 여행 전에도, 여행 중에도 플래너를 이용해서 시간을 아낄 수 있습니다!'},
  {id : 3,
  comment : 'J ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'},
  {id : 4,
  comment : 'P ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'}
];


// start를 누른적이 있으면 Carousel 안보이게
// 누른적이 없으면 Carousel 보이게
if(localStorage.getItem('start') != null){
  $('.carousel').css('display', 'none');
  $('.choose-container').css('display', 'flex');
}


// carousel 추가
function makeCard(value){
  let data = `
  <div class="slide-box">
    <div class="card">
      <img src="./img/trip${value.id + 1}.avif">
      <p>
        ${value.comment}
      </p>
    </div>
  </div>
  `;

  $('.slide-container').append(data);
}

carousel.forEach((data) => {
  makeCard(data);
});


// Carousel 기능 
let width = 0;

$('.period').eq(0).css('background-color', 'black');

$('.next-btn').on('click', () => {
  if(width < -3) {
    width = -4
    $('.slide-container').css('transform', `translateX(${width}00vw)`);
  } else {
    width -= 1;
    $('.slide-container').css('transform', `translateX(${width}00vw)`);
  }

  for(let i = 0; i < carousel.length; i++){
    if(width == -i){
      $('.period').css('background-color', 'white');
      $('.period').eq(i).css('background-color', 'black');
    }
  }
});

$('.previous-btn').on('click', () => {
  if(width >= 0) {
    width = 0;
    $('.slide-container').css('transform', `translateX(${width}00vw)`);
  } else {
    width += 1;
    $('.slide-container').css('transform', `translateX(${width}00vw)`);
  }

  for(let i = 0; i < carousel.length; i++){
    if(width == -i){
      $('.period').css('background-color', 'white');
      $('.period').eq(i).css('background-color', 'black');
    }
  }
});

for(let i = 0; i < carousel.length; i++){
  $('.period').eq(i).on('click', () => {
    $('.period').css('background', 'white');
    $('.period').eq(i).css('background', 'black');
    width = -i;
    $('.slide-container').css('transform', `translateX(${width}00vw)`);
  });
}



// close modal
$('.start-btn').on('click', () => {
  localStorage.setItem('start', JSON.stringify(1));
  $('.carousel').css('display', 'none');
  $('.choose-container').css('display', 'flex');
});