//1. Import area
import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

let initialState = {
    movies: [{
        name:'Alone2',
        image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
    },
    {
        name:'Mars2',
        image:'http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg'
    },
    {
        name:'Venus2',
        image:'http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg'
    }],
    cart:[]
}

const reduserFunction = (oldState = initialState, action)=>{
    //console.log(oldState);
    
    //let newState =  oldState;
    switch(action.type){
        case 'REMOVE':
            //console.log('hello') 
            return{
                ...oldState,
                movies:[...oldState.movies.filter((cv1,idx1,arr1)=>{
                    return (cv1.name !== action.mname)
                })]
            }
            
        case  'ADD':
            //console.log('hiii')
            return oldState;
            
        default:
            return oldState;
        } 
    
    //return oldState;
}
//reduserFunction()
//2. Defination
export default function Home() {
    //2.1 Hooks area
    const [newState , dispatch] = useReducer(reduserFunction, initialState)
    
    //2.2 Function defination

    //2.3 return statement
    return (
        <>
        
            
            <section className="banner-section">
                <div className="banner-bg bg_img bg-fixed" data-background="assets/images/banner/banner01.jpg" />
                <div className="container">
                <div className="banner-content">
                    <h1 className="title  cd-headline clip"><span className="d-block">book your</span> tickets for 
                    <span className="color-theme cd-words-wrapper p-0 m-0">
                        <b className="is-visible">Movie</b>
                        <b>Event</b>
                        <b>Sport</b>
                    </span>
                    </h1>
                    <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
                </div>
                </div>
            </section>
            
            <section className="search-ticket-section padding-top pt-lg-0">
                <div className="container">
                    <div className="search-tab bg_img" data-background="assets/images/ticket/ticket-bg01.jpg">
                        <div className="row align-items-center mb--20">
                            <div className="col-lg-6 mb-20">
                                <div className="search-ticket-header">
                                    <h6 className="category">welcome to Boleto </h6>
                                    <h3 className="title">what are you looking for</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-20">
                                <ul className="tab-menu ticket-tab-menu">
                                <li className="active">
                                    <div className="tab-thumb">
                                        <img src="assets/images/ticket/ticket-tab01.png" alt="ticket" />
                                    </div>
                                    <span>movie</span>
                                </li>
                                <li>
                                    <div className="tab-thumb">
                                        <img src="assets/images/ticket/ticket-tab02.png" alt="ticket" />
                                    </div>
                                    <span>events</span>
                                </li>
                                <li>
                                    <div className="tab-thumb">
                                    <   img src="assets/images/ticket/ticket-tab03.png" alt="ticket" />
                                    </div>
                                    <span>sports</span>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-area">
                            <div className="tab-item active">
                                <form className="ticket-search-form">
                                    <div className="form-group large">
                                        <input type="text" placeholder="Search for Movies" />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/city.png" alt="ticket" />
                                        </div>
                                        <span className="type">city</span>
                                        <select className="select-bar">
                                            <option value="london">London</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/date.png" alt="ticket" />
                                        </div>
                                        <span className="type">date</span>
                                        <select className="select-bar">
                                            <option value="26-12-19">23/10/2020</option>
                                            <option value="26-12-19">24/10/2020</option>
                                            <option value="26-12-19">25/10/2020</option>
                                        <option value="26-12-19">26/10/2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                                        </div>
                                        <span className="type">cinema</span>
                                        <select className="select-bar">
                                            <option value="Awaken">Awaken</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-item">
                                <form className="ticket-search-form">
                                    <div className="form-group large">
                                        <input type="text" placeholder="Search for Events" />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/city.png" alt="ticket" />
                                        </div>
                                        <span className="type">city</span>
                                        <select className="select-bar">
                                            <option value="london">London</option>
                                            <option value="dhaka">dhaka</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="rome">rome</option>
                                            <option value="khoksa">khoksa</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/date.png" alt="ticket" />
                                        </div>
                                        <span className="type">date</span>
                                        <select className="select-bar">
                                            <option value="26-12-19">23/10/2020</option>
                                            <option value="26-12-19">24/10/2020</option>
                                            <option value="26-12-19">25/10/2020</option>
                                            <option value="26-12-19">26/10/2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="thumb">
                                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                                        </div>
                                        <span className="type">event</span>
                                        <select className="select-bar">
                                            <option value="angular">angular</option>
                                            <option value="startup">startup</option>
                                            <option value="rosario">rosario</option>
                                            <option value="madrid">madrid</option>
                                            <option value="koltaka">kolkata</option>
                                            <option value="Last-First">Last-First</option>
                                            <option value="wish">wish</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-item">
                            <form className="ticket-search-form">
                                <div className="form-group large">
                                    <input type="text" placeholder="Search fo Sports" />
                                    <button type="submit"><i className="fas fa-search" /></button>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img src="assets/images/ticket/city.png" alt="ticket" />
                                    </div>
                                    <span className="type">city</span>
                                    <select className="select-bar">
                                        <option value="london">London</option>
                                        <option value="dhaka">dhaka</option>
                                        <option value="rosario">rosario</option>
                                        <option value="madrid">madrid</option>
                                        <option value="koltaka">kolkata</option>
                                        <option value="rome">rome</option>
                                        <option value="khoksa">khoksa</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img src="assets/images/ticket/date.png" alt="ticket" />
                                    </div>
                                    <span className="type">date</span>
                                    <select className="select-bar">
                                        <option value="26-12-19">23/10/2020</option>
                                        <option value="26-12-19">24/10/2020</option>
                                        <option value="26-12-19">25/10/2020</option>
                                        <option value="26-12-19">26/10/2020</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img src="assets/images/ticket/cinema.png" alt="ticket" />
                                    </div>
                                    <span className="type">sports</span>
                                    <select className="select-bar">
                                        <option value="football">football</option>
                                        <option value="cricket">cricket</option>
                                        <option value="cabadi">cabadi</option>
                                        <option value="madrid">madrid</option>
                                        <option value="gadon">gadon</option>
                                        <option value="rome">rome</option>
                                        <option value="khoksa">khoksa</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </section>    
            
            <section className="movie-section padding-top padding-bottom bg-two">
                <div className="container">
                <div className="row flex-wrap-reverse justify-content-center">
                    <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
                        <div className="widget-1 widget-facility">
                            <div className="widget-1-body">
                                <ul>
                                    <li>
                                        <Link to="#0">
                                            <span className="img"><img src="assets/images/sidebar/icons/sidebar01.png" alt="sidebar" /></span>
                                            <span className="cate">24X7 Care</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#0">
                                            <span className="img"><img src="assets/images/sidebar/icons/sidebar02.png" alt="sidebar" /></span>
                                            <span className="cate">100% Assurance</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#0">
                                            <span className="img"><img src="assets/images/sidebar/icons/sidebar03.png" alt="sidebar" /></span>
                                            <span className="cate">Our Promise</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-1 widget-banner">
                            <div className="widget-1-body">
                                <Link to="#0">
                                    <img src="assets/images/sidebar/banner/banner01.jpg" alt="banner" />
                                </Link>
                            </div>
                        </div>
                        <div className="widget-1 widget-trending-search">
                            <h3 className="title">Trending Searches</h3>
                            <div className="widget-1-body">
                                <ul>
                                    <li>
                                        <h6 className="sub-title">
                                            <Link to="#0">mars</Link>
                                        </h6>
                                        <p>Movies</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <Link to="#0">alone</Link>
                                        </h6>
                                        <p>Movies</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <Link to="#0">music event</Link>
                                        </h6>
                                        <p>event</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <Link to="#0">NBA Games 2020</Link>
                                        </h6>
                                        <p>Sports</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-1 widget-banner">
                        <div className="widget-1-body">
                            <Link to="#0">
                                <img src="assets/images/sidebar/banner/banner02.jpg" alt="banner" />
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-9">
                    <div className="article-section padding-bottom">
                        <div className="section-header-1">
                            <h2 className="title">movies</h2>
                            <Link className="view-all" to="movie-grid.html">View All</Link>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                            {//console.log(newState.movies)
                                newState.movies && newState.movies.map((cv,idx,arr)=>{
                                    return(
                                        <div key={idx} className="col-sm-6 col-lg-4">
                                            <div className="movie-grid">
                                                <div className="movie-thumb c-thumb">
                                                    <Link to="#0">
                                                        <img src={cv.image} alt="movie" />
                                                    </Link>
                                                </div>
                                                <div className="movie-content bg-one">
                                                    <h5 className="title m-0">
                                                        <Link to="#0">{cv.name}</Link>
                                                    </h5>
                                                    <ul className="movie-rating-percent">
                                                        <li>
                                                            <div className="thumb">
                                                                <img src="assets/images/movie/tomato.png" alt="movie" />
                                                            </div>
                                                            <span className="content">88%</span>
                                                        </li>
                                                        <li>
                                                            <div className="thumb">
                                                                <img src="assets/images/movie/cake.png" alt="movie" />
                                                            </div>
                                                            <span className="content">88%</span>
                                                        </li>
                                                    </ul>
                                                    <button className="btn btn-danger btn-xs" onClick={(e) =>{dispatch({type:'REMOVE',mname:cv.name})}}>dlt</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                            
                        </div>
                    </div>
                    <div className="article-section padding-bottom">
                        <div className="section-header-1">
                        <h2 className="title">events</h2>
                        <Link className="view-all" to="events.html">View All</Link>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                <img src="assets/images/event/event01.jpg" alt="event" />
                                </Link>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <Link to="#0">Digital Economy Conference 2020</Link>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                <img src="assets/images/event/event02.jpg" alt="event" />
                                </Link>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <Link to="#0">web design conference 2020</Link>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                <img src="assets/images/event/event03.jpg" alt="event" />
                                </Link>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <Link to="#0">digital thinkers meetup</Link>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="article-section">
                        <div className="section-header-1">
                        <h2 className="title">sports</h2>
                        <Link className="view-all" to="sports.html">View All</Link>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                <img src="assets/images/sports/sports01.jpg" alt="sports" />
                                </Link>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <Link to="#0">football league tournament</Link>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                <img src="assets/images/sports/sports02.jpg" alt="sports" />
                                </Link>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <Link to="#0">world cricket league 2020</Link>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                <img src="assets/images/sports/sports03.jpg" alt="sports" />
                                </Link>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <Link to="#0">basket ball tournament 2020</Link>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        </>
    )
}