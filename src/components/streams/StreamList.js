import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>


            <Link to={`/streams/edit/${stream.id}`} >
                 <span className="icon is-large">
                <i className="far fa-edit fa-2x"/>
              </span>
            </Link>
          <Link to={`/streams/delete/${stream.id}`} >
              <span className="icon is-large">
                  <i className="far fa-trash-alt fa-2x"/>

              </span>
          </Link>

        </div>
      );
    }
  }



    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="card" style={{maxHeight:90}}>

                    <div key={stream.id} class="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">

                                    <img src="https://image.flaticon.com/icons/svg/1778/1778610.svg" alt="paper clip"/>
                                </figure>
                            </div>
                            <div className="media-content">

                                <Link to={`/streams/${stream.id}`}>
                                    <p className="title">{stream.title}</p>

                                </Link>
                                <p className="subtitle is-6">@praveen_venigalla</p>

                            </div>
                            <div className="media-right"> {this.renderAdmin(stream)}</div>
                        </div>

                        <div class="content">
                            {/*<p>{stream.description}</p>*/}

                                {/*<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>*/}

                        </div>
                    </div>
                </div>
        );
        });
        }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="button is-outlined">
            Create Post
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1 className="title has-text-centered has-text-weight-semibold">All Posts</h1>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
