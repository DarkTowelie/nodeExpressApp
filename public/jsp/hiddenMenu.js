export default function hiddenNavig()
{
    let blackButton = document.querySelector('.blackButton');
    let hiddenNavig = document.querySelector('.hiddenNavig');
    let wrapScroll = document.querySelector('.wrapScroll');

    blackButton.addEventListener("click", showAndHideNavig);
    wrapScroll.addEventListener("scroll", hideNavig);

    function showAndHideNavig()
    {
        blackButton.style.backgroundColor = "white";
        setTimeout(()=>{
            blackButton.style.backgroundColor = "transparent";
        }, 200);
        
        if( hiddenNavig.style.visibility === 'visible')
        {
            
            hiddenNavig.style.visibility = 'hidden';
        }
        else
        {
            hiddenNavig.style.visibility = 'visible';
        }
    }

    function hideNavig()
    {
        if( hiddenNavig.style.visibility === 'visible')
        {
            hiddenNavig.style.visibility = 'hidden';
        }
    }
}