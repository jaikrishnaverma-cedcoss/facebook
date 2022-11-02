import React from 'react'
import style from './Middlebar.module.scss'
const Middlebar = () => {
    const active = (e) => {

        let parent = e.target.closest(".xfactor").parentNode.children
        for (let i = 0; i < parent.length; i++) {
            parent[i].classList.remove("active")
            console.log(parent[i].children[0])
        }
        e.target.closest(".xfactor").classList.add("active")
    }
    return (
        <div className="full col p5">
            <div className="row full flexAIC flexSB"><h2 className={style.head1}>Marketplace</h2>
                <button className={style.btn + " circle"} style={{ margin: "0px" }}><i class="fa-solid fa-gear"></i></button>
            </div>
            <div className={`row full flexAIC  ${style.searchdiv}`}>
                <i class="fa-solid fa-magnifying-glass m4 vm1 " style={{ marginTop: "10px", marginBottom: "10px" }}></i>
                <input type="text" className={style.searchinput} />
            </div>
            <div className="col full flexAIC flexSB brd">
                <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                    <i class="fa-solid fa-user circle p3 inactivate" ></i>
                    <p className={`p3 ${style.p21}`}>Browse all</p>
                </button>
                <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                    <i class="fa-solid fa-bell circle p3 inactivate" ></i>
                    <p className={`p3 ${style.p21}`}>Notifications</p>
                </button>
                <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                    <i class="fa-solid fa-inbox circle p3 inactivate" ></i>
                    <p className={`p3 ${style.p21}`}>Inbox</p>
                </button>
                <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                    <i class="fa-solid fa-bag-shopping circle p3 inactivate" ></i>
                    <p className={`p3 ${style.p21}`}>Buying</p>
                </button>
                <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                    <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                    <p className={`p3 ${style.p21}`}>Selling</p>
                </button>

            </div>
            <button className={style.btn2 + " fclr brd"}><i class="fa-solid fa-plus "></i>Create new listing  </button>

            <div className="full linebottom p2"></div>

            <div className="full col ">
                <h3 className='m2 hm0' style={{ marginTop: "6%" }}>Filters</h3>
                <h4 className="fclr m1 hm0">Lucknow, Uttar Pradesh. Within 60 kilometres</h4>
            </div>

            <div className="full linebottom p2" style={{ marginBottom: "10px" }}></div>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>
            <button onClick={active} className={`row flexAIC full brd xfactor ${style.list}`} style={{ margin: "0px", padding: "0% 3% !important" }}>
                <i class="fa-solid fa-tags circle p3 inactivate" ></i>
                <p className={`p3 ${style.p21}`}>Selling</p>
            </button>


        </div>
    )
}

export default Middlebar