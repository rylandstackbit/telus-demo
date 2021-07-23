import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import CtaButtons from './CtaButtons';
import withPrefix from '../utils/withPrefix';

export default function SectionHero(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'image_alt');
    const title = _.get(section, 'title');
    const content = _.get(section, 'content');
    const actions = _.get(section, 'actions');

    return (
        <section id={sectionId} className="block hero-block bg-accent outer">
            <div className="inner">
                <div className="grid">
                        <div className="cell block-preview">
                        {image ? 
                            <img src={withPrefix(image)} alt={imageAlt} /> :
                            <img src="https://images.ctfassets.net/l4hs1gcqh34s/1HdY5LVNbRyJ5OLF3AY1eL/a81f5c597f4a0181eab7407774b66a85/Screen_Shot_2021-07-22_at_2.27.36_PM.png" alt="Default Hero Image"/>
                        }
                        </div>
                    <div className="cell block-content">
                        {title && <h2 className="block-title underline">{title}</h2>}
                        {content && (
                            <div className="block-copy">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        )}
                            <div className="block-buttons">
                            {actions ? 
                                <CtaButtons actions={actions} /> :
                                <Link
                                    href="#"
                                    className="primary"
                                >
                                    <span className={classNames({ 'order-first': actionIconPos === 'right' })}>{label}</span>
                                </Link>
                            }
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
