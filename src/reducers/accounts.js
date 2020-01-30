import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import Accounts from "../components/Branch";

const initialState = {
    accounts: [],

}

export default function (state=initialState, action) {
    switch (action.type) {
        case 'RENDER_ACCOUNTS':
            return [...action.payload]
        default:
            return state;
    }
}


