
class Request {

    Req(link = "", config = undefined) {
        const answer = fetch(link, config)
            .then(result => result.json())
        return answer;
    }

    GET(link) {
        return this.Req(link, undefined)
    }
}

export default Request;