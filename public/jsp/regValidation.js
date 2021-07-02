let inputs = document.getElementsByTagName('input');
let submit = document.getElementById('send');
let form = document.getElementsByTagName('form');

form[0].addEventListener('submit', function(event){
    event.preventDefault()
})

function checkForm()
{
    let error = 0;
    inputs[0].classList.remove('redBorder');
    inputs[1].classList.remove('redBorder');
    inputs[2].classList.remove('redBorder');

    if (nameValid())
    {
        error++;
        inputs[0].classList.add('redBorder');
    }

    if (fPassValid())
    {
        error++;
        inputs[1].classList.add('redBorder');
    }

    if (sPassValid())
    {
        error++;
        inputs[2].classList.add('redBorder');
    }

    if (inputs[1].value === inputs[2].value)
    {
        if (error === 0)
        {
            alert('Thank you for registration');
        }
    }
    else
    {
        alert('Passwords must match');
        inputs[1].classList.add('redBorder');
        inputs[2].classList.add('redBorder');
    }
}

function nameValid ()
{
    return template = !/^[a-zA-z\d]{5,25}$/.test(inputs[0].value);
}

function fPassValid()
{
    return template = !/^[a-zA-Z\d\!\.\-\_]{5,25}$/.test(inputs[1].value)
}

function sPassValid()
{
    return template = !/^[a-zA-Z\d\!\.\-\_]{5,25}$/.test(inputs[2].value)
}

submit.addEventListener('click', checkForm);



