import PropTypes from "prop-types";
function Profile(props) {
    return (
      <div className="card" >
        {props.children}
        <div className="cord">
          <p onPointerMove={props.handleName(props.fullName)}>
            <h3 style={{color:"red", fontSize:"20px"}}>Hello!</h3>
            {props.fullName} 
          </p>  
          {props.bio} ans <br/>
          {props.profession} 
        </div>                  
      </div>       
    );    
  }
  Profile.defaultProps={fullName:"user", bio:"age", profession:"job"}
  Profile.propTypes={fullName:PropTypes.string, bio:PropTypes.number, profession:PropTypes.string}
  export default Profile;