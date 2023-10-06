import styles from './Profile.module.css'

function Profile (props){
    return(
        <div className={styles.ProfileContainer}>
            <div className={styles.imgContainer}>
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <hr />
            </div>
            <div className={styles.DescriçaoContainer}>
                <p>{props.skills}</p>
                <hr />
                <p>{props.tell}</p>
                <hr />
                <p>{props.email}</p>
                <hr />
            </div>
            <div className={styles.BtnContainer}>
                <a href="https://github.com/fillipesaque" target='blank'><button>GitHub</button></a>
                <a href=""><button>Linkedln</button></a>
                <a href=""><button>Instagram</button></a>
            </div>
        </div>
    )
}

export default Profile