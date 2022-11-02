import React from 'react';
import style from './Sidebar.module.scss';
const Sidebar = () => {
  return (
  <div className="col flexAIC w100 sidebar ">
<button className={style.btn+" circle"}><i class="fa-solid fa-house "></i></button>
<button className={style.btn+" circle"}><i class="fa-solid fa-circle-user"></i></button>
<button className={style.btn+" circle"}>
<div className="row flexAIC">
<i class="fa-solid fa-ellipsis-vertical m1"></i>
<i class="fa-solid fa-ellipsis-vertical m1"></i>
<i class="fa-solid fa-ellipsis-vertical m1"></i>
</div>
</button>
<button className={style.btn+" circle"}><i class="fa-solid fa-house-fire"></i></button>
<button className={style.btn+" circle"}><i class="fa-solid fa-user-group"></i></button>
<button className={style.btn+" circle"}><i class="fa-solid fa-users"></i></button>
<button className={style.btn+" circle"}><i class="fa-solid fa-link"></i></button>
  </div>
  )
}

export default Sidebar