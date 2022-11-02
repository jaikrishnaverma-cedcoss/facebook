import React from 'react'
import nav from './Nav.module.scss'
const Nav = () => {
  return (
<>
<nav className={nav.full+" "+nav.flexSB+" "+nav.linebottom}>
<div className={nav.row+" "+nav.flexSB}>
<a href=""><p className={nav.fclr+" "+nav.logo}>facebook</p></a>
<button className={nav.circle+" "+nav.p5}>
<i class="fa-solid fa-magnifying-glass"></i>
</button>
</div>

<div className={nav.row+" "+nav.div2}>
<button className={nav.circle+" "+nav.p5+" "+nav.m2}>
<i class="fa-brands fa-facebook-messenger"></i>
</button>
<button className={nav.circle+" "+nav.p5+" "+nav.m2}>
<i class="fa-solid fa-bell"></i>
</button>
<button className={nav.circle+" "+nav.p5+" "+nav.m2}>
<i class="fa-solid fa-user"></i>
</button>
</div>
</nav>
<div style={{marginTop: "75px"}}></div>
</>
  )
}

export default Nav