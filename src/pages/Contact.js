

const Contact = () => {
    return (
        <div class="container">
            <h1 className="mt-3">Contact Us</h1>
            <form>
                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group mb-3">
                    <label for="exampleFormControlTextarea1">Message:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    );
}


export default Contact;