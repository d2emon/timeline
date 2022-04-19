import { Component, Fragment } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import './MyComponent.css';

class MyComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            setBookName: '',
            setReview: '',
            fetchData: [],
            reviewUpdate: '',
        };
    }

    componentDidMount () {
        Promise.resolve({
            data: [
                {
                    id: '1',
                    bookName: 'Name',
                    review: 'Review',
                },
                {
                    id: '2',
                    bookName: 'Name',
                },
                {
                    id: '3',
                    bookName: 'Name',
                },
                {
                    id: '4',
                    bookName: 'Name',
                },
                {
                    id: '5',
                    bookName: 'Name',
                },
            ],
        }).then((response) => {
            this.setState({
                fetchData: response.data,
            });
        });
    }

    submit () {
        Promise.resolve(this.state).then(() => {
            alert('success post');
        });
        console.log(this.state);
        document.location.reload();
    }

    delete (id) {
        /*
        if (confirm('Do you want to delete?')) {
            Promise.resolve();
            document.location.reload();
        }
        */
    }

    edit (id) {
        Promise.resolve();
        document.location.reload();
    }

    handleChange1 (event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    handleChange2 (event) {
        this.setState({
            reviewUpdate: event.target.value,
        });
    }

    render () {
        return <div>
            <h1>Dockerized Fullstack React Application</h1>
            <div>
                <input
                    name="setBookName"
                    placeholder="Enter Book Name"
                    onChange={this.handleChange1}
                />
                <input
                    name="setReview"
                    placeholder="Enter Review"
                    onChange={this.handleChange1}
                />
            </div>
            <Button
              className="my-2"
              variant="primary"
              onClick={this.submit}
            >
                Submit
            </Button>
            <Container>
                <Row>
                    { this.state.fetchData.map((item) => <Fragment
                        key={item.id}
                    >
                        <Card
                            style={{
                                width: '18rem',
                            }}
                            className='m-2'
                        >
                            <Card.Body>
                                <Card.Title>
                                    { item.bookName }
                                </Card.Title>
                                <Card.Text>
                                    { item.review }
                                </Card.Text>
                                <input
                                    name="reviewupdate"
                                    onChange={(event) => this.handleChange2(event)}
                                    placeholder="Update Review"
                                />
                                <Button
                                    className="m-2"
                                    onClick={() => this.edit(item.id)}
                                >
                                    Update
                                </Button>
                                <Button
                                    className="m-2"
                                    onClick={() => this.delete(item.id)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Fragment>) }
                </Row>
            </Container>
        </div>;
    }
}

export default MyComponent;
