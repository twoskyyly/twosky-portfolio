new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	// 네비게이터를 봉;ㅁ/숨김
    navigation:true,
	// 네비게이터 위치
	navigationPosition: 'right',
	// 하이퍼링크
	anchors:['num0', 'num1', 'num2','num3','num4','num5','num6','num7'],

	afterLoad: function(origin, destination, direction){
		//  destination 변수는 해당 section에 들어왔을때
		//  origin 매개변수는 해당 section 을 벗어났을때
        var origin = this;
		console.log(origin)
		// console.log(`원래섹션:${old_sec} 다음섹션:${new_sec} 방향:${direction} `)
        //using index
		// 해당 섹션에 들어오면
		if(destination.index == 1){
			sec_in()
		}
        if(destination.index == 2){
			sec_in2()
        }
        if(destination.index == 3){
			sec_in3()
        }
        if(destination.index == 4){
			sec_in4()
        }
        if(destination.index == 5){
			sec_in5()
        }
        if(destination.index == 6){
			sec_in6()
        }
        if(destination.index == 7){
			sec_in7()
        }
		
		// 해당 섹션을 벗어났을 때
		if(origin.index == 1){
			sec_out()
		}
        if(origin.index == 2){
			sec_out2()
        }
        if(origin.index == 3){
			sec_out3()
        }
        if(origin.index == 4){
			sec_out4()
        }
        if(origin.index == 5){
			sec_out5()
        }
        if(origin.index == 6){
			sec_out6()
        }
        if(origin.index == 7){
			sec_out7()
        }

    }

});

// $('.section .inner').hide()
$(window).on("load",function(){
	$('#section0 .inner').addClass('on')
})
$(window).on("load",function(){
	$('#section2 .inner, .right_box2_cover, .all_wrap2 .imgbox_sec2>img').removeClass('on')
})
function sec_in2(){
	$('#section2 .inner, .right_box2 , .right_box2_cover, .all_wrap2 .imgbox_sec2>img').addClass('on');
}
function sec_out2(){
	$('#section2 .inner, .right_box2, .right_box2_cover, .all_wrap2 .imgbox_sec2>img').removeClass('on');
}

function sec_in3(){
	$('#section4 .inner, .cheil_img img, .cheil_right ul').addClass('on');
}
function sec_out3(){
	$('#section4  .inner, .cheil_img img, .cheil_right ul').removeClass('on');
}

function sec_in4(){
	$('#section5 .inner,.lafuma_left,.lafuma_img img').addClass('on');
}
function sec_out4(){
	$('#section5  .inner,.lafuma_left,.lafuma_img img').removeClass('on');
}

function sec_in5(){
	$('#section6 .inner,.nuart_img img,ul.top .nuart_cover,ul.btt .nuart_cover').addClass('on');
}
function sec_out5(){
	$('#section6  .inner,.nuart_img img,ul.top .nuart_cover,ul.btt .nuart_cover').removeClass('on');
}

function sec_in6(){
	$('#section3 .inner').addClass('on');
}
function sec_out6(){
	$('#section3  .inner').removeClass('on');
}

function sec_in7(){
	$('#section7 .inner').addClass('on');
}
function sec_out7(){
	$('#section7  .inner').removeClass('on');
}



// 1. 문서객체 선택
let btn = document.querySelector('.btn_menu')
console.log(btn)
let nav = document.querySelector('nav')
console.log(nav)

//  이벤트 발생
btn.addEventListener("click",function(){
	btn.classList.toggle('on')
	nav.classList.toggle('on')
})
// btn.addEventListener("click",function(){
	//     nav.classList.toggle('on')
	// })
	
	
	function sec_in(){
		$('#section1 .inner').addClass('on');
		// alert("나의 소개페이지 오신것을 환영합니다")
		// animeation gage
		var tl = anime.timeline({
			easing: 'easeInOutQuart',
			duration: 500
		});
		
		tl.add({	
			targets: '.g1',
			height: '95%',
			delay:1000,
		})
		.add({	
			targets: '.g2',
			height: '90%',
		})
		.add({	
			targets: '.g3',
			height: '85%',
		})
		.add({	
			targets: '.g4',
			height: '90%',
		})
		.add({	
			targets: '.g5',
			height: '80%',
		})
		.add({	
			targets: '.g6',
			height: '95%',
		})
		.add({	
			targets: '.g7',
			height: '95%',
		})
		.add({	
			targets: '.g8',
			height: '85%',
		})
	}
	function sec_out(){
		$('#section0 .inner').removeClass('on');
		// alert("나의 소개를 잘 보셔나요")
		anime({
			targets:'.gage_in',
			height:0
		})
	}

	anime({
		targets: '.ss path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1500,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: true
	});

// 조금 더 줄인 코드
$(document).ready(function(){
	$('.graphics2').hide()
	// 탭메뉴 자신 클릭시
	$('.btn li').on('click',function(){
	  	$('.btn li').removeClass('active');    // 모든 li에 'active'클래스 제거
	  	$(this).addClass('active');    // 자신에게 'active'클래스 적용
		$('.tab_content ul').eq($(this).index()).fadeIn().siblings('.tab_content ul').hide();
	});	
});
$(window).on("load",function(){
	$('.btn .gr').addClass('active')
})
$(document).ready(function(){
	$('.skill, #section1 .cover').hide()
	// 탭메뉴 자신 클릭시
	$('.skill_btn button').on('click',function(){
	  	$('.skill, #section1 .cover').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('.skill span').on('click',function(){
	  	$('.skill, #section1 .cover').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
let scrollY=$(window).scrollTop()
console.log(scrollY)



