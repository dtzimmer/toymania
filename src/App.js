import React, { Component } from 'react';
import './App.css'

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        name: 'Dan',
        cart: 0
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                addToCart : () => this.setState({
                    cart: this.state.cart +1
                }),
                removeFromCart : () => this.setState({
                    cart: this.state.cart -1
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class AddtoCartButton extends Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) =>(
                        <React.Fragment>
                            <button onClick={context.addToCart}>Add to Cart</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>

        )
    }
}

class RemoveItemButton extends Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) =>(
                        <React.Fragment>
                            <button onClick={context.removeFromCart}>Remove Item</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>

        )
    }
}

class User extends Component  {
    render() {
        return(
            <div>
                <MyContext.Consumer>
                    {(context) =>(
                        <React.Fragment>
                            <p>Welcome {context.state.name}! </p>
                            <p>Items in Cart: {context.state.cart}</p>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}


class App extends Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <h1>TOY MANIA!</h1>
                    <User />
                    <section>
                        <div>
                            <h2>Mr. Potato Head</h2>
                            <img src="https://d3nevzfk7ii3be.cloudfront.net/igi/JPpjbao64ZTJAPmV.large" alt="Mr. Potato Head" width="300px"/>
                            <p>Price: $11.99</p>
                            <AddtoCartButton/>
                            <RemoveItemButton/>
                        </div>
                        <div>
                            <h2>Spiderman</h2>
                            <img src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/105/10585/10585905.jpg" alt="Spiderman" width="200px"/>
                            <p>Price: $31.99</p>
                            <AddtoCartButton/>
                            <RemoveItemButton/>
                        </div>
                        <div>
                            <h2>Dog Toy</h2>
                            <img src="https://lumiere-a.akamaihd.net/v1/images/file_319c811a.jpeg?width=1200&region=0%2C0%2C2000%2C2000" alt="Dog Toy" width="200px"/>
                            <p>Price: $14.99</p>
                            <AddtoCartButton/>
                            <RemoveItemButton/>
                        </div>
                        <div>
                            <h2>Creepy Monkey</h2>
                            <img src="https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/dP4AAOSw-jhUBY3k/$_35.JPG?set_id=2" alt="Creepy Monkey" width="200px"/>
                            <p>Price: $16.99</p>
                            <AddtoCartButton/>
                            <RemoveItemButton/>
                        </div>
                    </section>
                </div>
            </MyProvider>
        );
    }
}

export default App;