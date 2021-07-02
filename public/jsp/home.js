let sliderImageIndex = 0;

function nextSlide()
{

	if (sliderImageIndex < 3)
	{
		sliderImageIndex+=1;
		moveSlide();
	}
}

function previousSlide()
{
	if (sliderImageIndex >= 1)
	{
		sliderImageIndex-=1;
		moveSlide();
	}
}

function moveSlide()
{
	let slides = document.getElementsByClassName("slide");
	let slideWidth = slides[sliderImageIndex].width;

	let slideMargin = slideWidth * sliderImageIndex;
	let slidesList = document.getElementById("slidesList");
	slidesList.style.left = -slideMargin + 'px';
}

/*-----------------------------------------------------------------------------------------*/
let workImageIndex = 1;

function loadMore()
{
	if (workImageIndex <= 15)
	{
		let work = document.getElementsByClassName("work");
		for (let i = 0; i < 3; i++)
		{
			let divItem = document.createElement('div');
			divItem.className = "item";
			divItem.style.backgroundImage = ("url('/image/work/" + workImageIndex + ".png')");
			workImageIndex++;
			work[0].append(divItem);
		}
	}
}
function init()
{
	let width = document.querySelector('.imagesContainer').offsetWidth;
	let height = document.querySelector('.imagesContainer').offsetHeight;
	let slides = document.querySelectorAll('.slide');

	slides.forEach(element => {
		element.style.width = width + 'px';
		element.style.heoght = height + 'px';
	});

    let buttonNext =  document.getElementById("buttonNext");
    nextSlide();
    buttonNext.addEventListener ("click", nextSlide);
    let buttonPrevious =  document.getElementById("buttonPrevious");
    buttonPrevious.addEventListener ("click", previousSlide);
    
    loadMore(); 
    loadMore();
}
setTimeout(init, 0);
