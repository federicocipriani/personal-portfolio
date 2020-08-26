import React from 'react';
import filterStyles from './filter.module.scss';
import cx from 'classnames';

function Filter({ tags, activeFilters, handleFiltering }) {
    let active = tags.map((tag) => {
        return activeFilters.reduce((output, activeTag) => {
            return output || activeTag === tag;
        }, false);
    });

    return (
        <div className='filter_box'>
            <p style={{ color: 'var(--color3)' }}>Filter projects by tag</p>
            <div className={filterStyles.filter_projects}>
                {tags.map((tag, i) => (
                    <button
                        key={i}
                        className={cx(filterStyles.filter_projects__button, {
                            [filterStyles.filter_projects__button_active]:
                                active[i],
                        })}
                        onClick={() => handleFiltering(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;
