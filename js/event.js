function makeBacgroundRed()
{
    document.body.style.backgroundColor = 'limegreen';
}


//handle salmon button click by setting function name.
const salmonButton = document.getElementById( 'make-bg-salmon' );

//here no need to call the function. just set the name of the function.
salmonButton.onclick = makeBacgroundSalmon;

function makeBacgroundSalmon()
{
    document.body.style.backgroundColor = 'salmon';
}


//green button event handler with annonymous function
const greenButton = document.getElementById( 'make-bg-green' );
greenButton.onclick = function ()
{
    document.body.style.backgroundColor = 'green';
}


//Goldenrod bg collor with addEventListener event handler
const goldenButton = document.getElementById( 'make-bg-goldenrod' );
goldenButton.addEventListener( 'click', makeBackgroundGoldenrod );

function makeBackgroundGoldenrod()
{
    document.body.style.backgroundColor = 'goldenrod';
}

//make background hotpink with addEventListener and using annonymous function
const hotpinkButton = document.getElementById( 'make-bg-hotping' );
hotpinkButton.addEventListener( 'click', function makeBackgroundHotpink()
{
    document.body.style.backgroundColor = 'hotpink';
} );

//direct shortcut one line approach
document.getElementById( 'make-bg-bisque' ).addEventListener( 'click', function ()
{
    document.body.style.backgroundColor = 'Bisque';
} );


//reset the bg color to white
const resetButton = document.getElementById( 'reset' );
resetButton.onclick = reset;

function reset()
{
    document.body.style.backgroundColor = 'white';
}