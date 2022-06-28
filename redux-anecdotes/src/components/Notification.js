// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const Notification = (props) => {
  // const notification = useSelector((state) => state.notifications);
  // console.log('notification', notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div>
      {props.notification.isShow && (
        <div style={style}>{props.notification.content}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notifications,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);

export default ConnectedNotification;
