import React, {useState} from 'react';
import './card.css'

export default function Card() {

    const [header] = useState("Lorem Ipsum");

    return (
        <div className="card-body">
            <div className="card-main">
                <section className="card-header">
                    <div className="card-header-content">
                        {header}
                    </div>
                </section>
                <section className="card-content">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. </div>
                </section>
            </div>
        </div>
    )
}