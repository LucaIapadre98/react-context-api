export default function MyPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Dati Personali</h4>
                        </div>
                        <div className="card-body">
                            <h6>Nome:</h6>
                            <h6>Cognome:</h6>
                            <h6>Età:</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Hobby</h4>
                        </div>
                        <div className="card-body">
                            <p>Lista hobby:</p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Competenze Lavorative</h4>
                        </div>
                        <div className="card-body">
                            <p>Descrizione:</p>
                            <p>Competenze acquisite:</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Viaggi</h4>
                        </div>
                        <div className="card-body">
                            <p>Descrizione viaggi:</p>
                            <p>Mete preferite:</p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}