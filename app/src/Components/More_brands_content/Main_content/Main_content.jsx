import React from 'react';
import classes from '../../../Css/More_brands_page_content_css/main_content.module.css';
import { mainContentBrandsList } from './main_content_brands_list';
import Brand_blocks from './Brand_blocks/Brand_blocks';

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
                        {mainContentBrandsList.map((brand, index) => {
                            return (
                                <Brand_blocks 
                                    key={index}
                                    index={index}
                                    img={brand.img}
                                    title={brand.title}
                                    under_title={brand.under_title}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main_content