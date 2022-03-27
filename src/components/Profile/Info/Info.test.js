import Info from "./Info";
import {create} from "react-test-renderer";

describe('status works correct', () => {
    test('state contains a status', () => {
        const component = create(<Info status={'status'}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('status')
    })
})