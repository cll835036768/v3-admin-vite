/*
 * @Author: chululu 83503768@qq.com
 * @Date: 2024-04-18 16:20:43
 * @LastEditors: chululu 83503768@qq.com
 * @LastEditTime: 2024-04-18 18:28:27
 * @FilePath: \v3-admin-vite\src\api\login\types\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface LoginRequestData {
  /** admin 或 editor */
  accountNo: ""
  /** 密码 */
  password: string
  /** 验证码 */
  imageCode?: string
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
