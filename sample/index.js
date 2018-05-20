
const { render } = ReactDOM




render(
    <h1 id='title'
    className ='header'
    style= {{backgroundColor: 'orange', color: 'white',fontFamily: 'verdana'}}>
    hello world
    </h1>,
    document.getElementById('react-container')
)