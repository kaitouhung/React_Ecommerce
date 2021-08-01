import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'
import { updateMe } from 'src/pages/Auth/auth.slice'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'

export default function Password() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    reset
  } = useForm({
    defaultValues: {
      password: '',
      new_password: '',
      confirmed_new_password: ''
    }
  })

  const dispatch = useDispatch()

  const update = async data => {
    const body = { password: data.password, new_password: data.new_password }
    try {
      await dispatch(updateMe(body)).then(unwrapResult)
      reset()
      toast.success('Đổi mật khẩu thành công', {
        position: 'top-center',
        autoClose: 3000
      })
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }

  return (
    <div>
      <S.Profile>
        <S.ProfileHeader>
          <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
          <S.ProfileHeaderSubtitle>
            Để bảo vệ tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
          </S.ProfileHeaderSubtitle>
        </S.ProfileHeader>
        <PasswordContent onSubmit={handleSubmit(update)}>
          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    name="password"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />
              <ErrorMessage name="password" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="new_password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    name="new_password"
                    onChange={field.onChange}
                    value={getValues('new_password')}
                  />
                )}
              />
              <ErrorMessage name="new_password" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Nhập lại mật khẩu</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="confirmed_new_password"
                control={control}
                rules={{
                  ...rules.password,
                  validate: {
                    samePassword: v =>
                      v === getValues('new_password') ||
                      'mật khẩu nhập lại không khớp'
                  }
                }}
                render={({ field }) => (
                  <InputPassword
                    name="confirmed_new_password"
                    onChange={field.onChange}
                    value={getValues('confirmed_new_password')}
                  />
                )}
              />
              <ErrorMessage name="confirmed_new_password" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </PasswordContent>
      </S.Profile>
    </div>
  )
}
