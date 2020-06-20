import React from 'react';

type TagProps = {
    name: string,
  }

const Tag = ( props : TagProps ) => {
    return (
    <div className="tag"><span>{props.name}</span></div>
    );
};

export const KeyPractice = () => {
    return (
        <section>
            <div className="subheading">
                <div className="flex-wrapper">
                    <div className="left"><p>Ключевые навыки</p></div>
                    <div className="right">
                        <div className="tags-container">
                            <Tag name="JavaScript"/>
                            <Tag name="TypeScript"/>
                            <Tag name="ES6"/>
                            <Tag name="ES7/8"/>
                           
                            <Tag name="ReactJS"/>
                            <Tag name="Redux"/>
                            <Tag name="Thunk"/>
                            <Tag name="hooks"/>
                            <Tag name="Next.js"/>
                            <Tag name="SPA/SSR"/>

                            <Tag name="HTML5"/>
                            <Tag name="CSS3"/>
                            <Tag name="Material Design"/>
                            <Tag name="ANT"/>
                            <Tag name="Bootstrap"/>
                            <Tag name="Flexbox"/>

                            <Tag name="TSLint"/>
                            <Tag name="Node.js"/>
                            <Tag name="Node-Webkit"/>
                            <Tag name="npm"/>
                            <Tag name="bash"/>
                            <Tag name="REST API"/>
                            <Tag name="CORS"/>
                            <Tag name="Express"/>
                            <Tag name="JWT"/>
                           
                            <Tag name="PostgreSQL"/>
                            <Tag name="Nginx"/>
                            <Tag name="MongoDB"/>
                            <Tag name="Linux"/>
                            <Tag name="Docker"/>
                            <Tag name="Git"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



 






