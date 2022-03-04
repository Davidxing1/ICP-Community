import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

//更新钱包信息
  const loginstate=atomWithStorage('address','Connect Wallet')
//更新是否登陆钱包
  const wallet=atom(true)
//打开登陆界面
  const loginopen=atom(false)
//打开钱包信息界面
  const openaccount=atom(false)


export {loginstate,wallet,loginopen,openaccount}


