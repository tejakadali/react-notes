import React from 'react';
import { connect } from 'react-redux';
import { ReduxActions } from '../_actions';
import { SideBar } from '../Components/sidebar'
import { ViewNote } from '../Components/viewnote'

class Main extends React.Component {

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize()
    }
    
    resize() {
        // let mobileDevice = (window.innerWidth <= 575);
        // this.setState({ device: mobileDevice ? 'Mobile' : 'Desktop' })
        this.props.dispatch(ReduxActions.deviceWidth(window.innerWidth))
    }
    render() {
        const { toggle_list_view, filteres_notes } = this.props
        return (
            <React.Fragment>
                {filteres_notes.length == 0 ? <div id="no_notes">No notes found</div> :
                    <React.Fragment>
                        {toggle_list_view && <SideBar />}
                        <ViewNote />
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    const { toggle_list_view, filteres_notes } = state;
    return {
        toggle_list_view, filteres_notes
    };
}

const connectedLoginPage = connect(mapStateToProps)(Main);
export { connectedLoginPage as Main }; 