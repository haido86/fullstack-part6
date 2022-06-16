import { useSelector } from 'react-redux';

const Notification = () => {
  const notifications = useSelector((state) => state.notifications);
  console.log('notification', notifications);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div>
      {notifications.map((notification) => (
        <div style={style} key={notification.content}>
          <div>{notification.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
