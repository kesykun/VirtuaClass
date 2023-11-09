const Instructor = () => {
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

                <div className="content__instructor__account">
                    <div className="content__header">
                        <h1>Instructor Account</h1>
                    </div>
                    <div className="content__form">
                        <input />
                        <button>Search</button>
                    </div>
                    <div className="content__body">

                    </div>
                </div>

                <div className="content__instructor__name">
                    <div className="content__header">
                        <h1>Insert Instructor's name here</h1>
                    </div>
                    <div className="content__body">
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
};



export default Instructor;