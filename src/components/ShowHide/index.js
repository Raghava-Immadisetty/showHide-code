import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  onFirstName = () => {
    this.setState(prevState => {
      if (prevState.firstName === true) {
        return {
          firstName: false,
        }
      }
      return {
        firstName: true,
      }
    })
  }

  onLastName = () => {
    this.setState(prevState => {
      if (prevState.lastName === true) {
        return {
          lastName: false,
        }
      }
      return {
        lastName: true,
      }
    })
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="btn-name">
              <button className="btn" type="button" onClick={this.onFirstName}>
                Show/Hide FirstName
              </button>
              {firstName ? (
                <div className="name-container">
                  <p>Jeo</p>
                </div>
              ) : null}
            </div>
            <div className="btn-name">
              <button className="btn" type="button" onClick={this.onLastName}>
                Show/Hide LastName
              </button>
              {lastName ? (
                <div className="name-container">
                  <p>Jonas</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
