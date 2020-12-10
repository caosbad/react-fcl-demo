import * as fcl from "@onflow/fcl"
import { template as setCode } from "caos-six-set-code"

export async function Send(code: string, deployScript: string) {
    const response = await fcl.send([
        setCode({
            proposer: fcl.currentUser().authorization,
            authorization: fcl.currentUser().authorization,     
            payer: fcl.currentUser().authorization,             
            code: code,
            deployScript
        })
    ])

    try {
      return await fcl.tx(response).onceExecuted()
    } catch (error) {
      return error;
    }
}