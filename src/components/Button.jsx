const Button = ({role, name, fnc, para}) =>{
    return <button className={role} onClick={() => fnc(para.id)}>{name}</button>
};
 export default Button;