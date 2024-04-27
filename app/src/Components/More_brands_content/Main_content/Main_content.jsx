import React from 'react'

const Main_content = () => {
    const title = "Review";
  const title_2 = "All brands, series, models and technical data of cars";
  const title_3 = "Top Marken";
  return (
    <div className={classes.main_block}>
    <div className={classes.main_block_inner}>
      <div className={classes.grid}>
        <div className={classes.title_block}>
          <p className={classes.title}>{title}</p>
          <p className={classes.under_title}>{title_2}</p>
        </div>
        <p className={classes.second_title}>{title_3}</p>
        <div className={classes.grid_inner}>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main_content