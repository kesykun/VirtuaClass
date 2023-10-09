const Application = () => {
    return (
        <main className="main__application">
            <nav className="application__navbar">
                <span>
                    <p>Welcome</p>
                    <button>Admin</button>
                </span>
            </nav>
            <section className="application__section">
                <div className="section__content">
                    
                    <ApplicationPanel title="Enrollment Applications">
                        <div className="body__application">

                            <ApplicationPanelItem title="Enrollment Application" />
                            <ApplicationPanelItem title="Enrollment Application" />
                            <ApplicationPanelItem title="Enrollment Application" />
                            <ApplicationPanelItem title="Enrollment Application" />
                            <ApplicationPanelItem title="Enrollment Application" />
                            <ApplicationPanelItem title="Enrollment Application" />
                            <ApplicationPanelItem title="Enrollment Application" />
                        </div>
                    </ApplicationPanel>

                    <section className="content__button">
                        <button className="button__accept">Accept</button>
                        <button className="button__discard">Discard</button>
                    </section>
                    
                    <ApplicationPanel title="Application Details">
                        <div className="body__application">
                            
                        </div>
                    </ApplicationPanel>
                </div>
            </section>
        </main>
    );
};

const ApplicationPanel = ({ title, children }) => {
    return (
        <section className="content__container">
            <div className="container__heading">
                {title}
            </div>
            <div className="container__body">
                {children}
            </div>
        </section>
    );
};

const ApplicationPanelItem = ({title}) => {
    return (
        <div className="application__item">
            {title}
        </div>
    );
};

export default Application;