class Definer {
    // General errors
    static general_err1 = "att: something went wrong!";
    static general_err2 = "att: ther is no data with that params!";
    static general_err3 = "att: file upload error!";



    // Member auth related errors
    static auth_err1 = "att: mongodb validation is failed!";
    static auth_err2 = "att: jwt token creation error";
    static auth_err3 = "att: no member with that mb_nick!";
    static auth_err4 = "att: your credentials do not match!";

    // Product related errors
    static product_err1 = "att: product creation is failed!";

}

module.exports = Definer;