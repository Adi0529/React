import user from "../assets/user.png";
import './Profile.css';

function Profile(props) {
    return (
        <div className="d-flex flex-column gap-2 border rounded-4 shadow info">
            <div>
                <img src={user} alt="User Profile" className="rounded-circle mx-auto d-block mt-4" />
            </div>

            <div className="d-flex flex-column gap-2 p-4 ">
                <h2 className="text-light fw-bolder text-center display-6">{props.first} {props.last}</h2>
                <p className="text-primary text-center">Software Engineer</p>
                <p className="text-center">{props.bio}</p>
                <p className="text-center">{props.location}</p>
                <p className="text-center">{props.phone}</p>
                <p className="text-center">{props.email}</p>
                <button className="btn btn-danger rounded-pill">Edit Profile</button>
            </div>
        </div>
    );
}
export default Profile;