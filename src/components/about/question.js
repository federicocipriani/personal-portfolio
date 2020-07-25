import React, { useState } from 'react';
import questionStyles from './question.module.scss';
import cx from 'classnames';
import marked from 'marked';

const Question = ({ id, title, content }) => {
    const [visibility, setVisibility] = useState(false);

    const toggle = () => {
        setVisibility(!visibility);
    };

    const getMarkdownText = (text) => {
        var rawMarkup = marked(text, { sanitize: true });
        return { __html: rawMarkup };
    };

    return (
        <div>
            <div className={questionStyles.page__card__header}>
                <button
                    id={id}
                    onClick={toggle}
                    className={
                        questionStyles.page__card__header_toggler
                    }></button>
                <div
                    className={cx(
                        questionStyles.page__content__card__header_chevron,
                        {
                            [questionStyles.page__content__card__header_chevron_active]: visibility,
                        }
                    )}>
                    <i class='ri-arrow-right-s-line ri-2x'></i>
                </div>
                <h2>{title}</h2>
            </div>
            <div
                className={
                    visibility
                        ? questionStyles.page__card__paragraph__visible
                        : questionStyles.page__card__paragraph__notvisible
                }>
                {content.map((item) => (
                    // <p
                    //     className={
                    //         questionStyles.page__card__paragraph__visible_paragraph
                    //     }>
                    //     {item}
                    // </p>
                    <p dangerouslySetInnerHTML={getMarkdownText(item)}></p>
                ))}
            </div>
        </div>
    );
};

export default Question;
