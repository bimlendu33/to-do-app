import './Sidebar.css';
import avatar from '../../assets/avatar.png';
import moment from 'moment';

const Sidebar = () => {
    function getCurrentDate() {

        const currentDate = moment();
        const future = moment('2019-03-02 10:03:02');
        const timeDetails = moment(currentDate).format(`h:mm a`);
        const dateDetails = moment(currentDate).format(`DD MMMM, YYYY`);


        return (
            <div className="time-date-details-wrapper">
                <div>{timeDetails}&nbsp;</div>
                <div> {dateDetails}</div>
            </div>
        );
    }
    return (
        <>
            <div className="sidebar-container-wapper">
                <div className="avatar-wrapper">
                    <img className="avatar-image " src={avatar} />
                </div>
                <div className="title-wrapper">
                    <div>
                        <strong>
                            Hi, User!
                        </strong>
                    </div>
                    <div className="date-time-wrapper">
                        {getCurrentDate()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;