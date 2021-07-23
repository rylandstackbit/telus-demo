import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import BlogPostFooter from '../components/BlogPostFooter';
import withPrefix from '../utils/withPrefix';

export default function Post(props) {
    const page = _.get(props, 'page');
    const config = _.get(props, 'config');
    const title = _.get(page, 'title');
    const subtitle = _.get(page, 'subtitle');
    const image = _.get(page, 'image');
    const imageAlt = _.get(page, 'image_alt');
    const content = _.get(page, 'content');

    return (
        <Layout page={page} config={config}>
            <div className="outer">
                <div className="inner-medium">
                    <article className="post post-full">
                        <header className="post-header">
                            {title === "lorem-ipsum" ? 
                                <h1 className="post-title">Set Up Your Title in the Sidebar</h1>
                                : <h1 className="post-title">{title}</h1>
                            }
                            {subtitle === "lorem-ipsum" ? 
                            :
                            }
                            {subtitle && }
                        </header>
                        {image && (
                            <div className="post-image">
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        {content && (
                            <div className="post-content">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        )}
                        <BlogPostFooter post={page} dateType={'long'} />
                    </article>
                </div>
            </div>
        </Layout>
    );
}
