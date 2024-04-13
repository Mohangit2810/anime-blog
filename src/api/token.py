# import requests

# url = "https://myanimelist.net/v1/oauth2/token"

# payload = {
#     "client_id": "5d9dfcf5d91d92cae8248ec114f4ce60",
#     "client_secret": "aa5707bc157d2dd19258530db43da57ff72a680808a2fb0346839bd78c0ff108",
#     "code": "def50200aee9ad9a0e3990440f2c20e435884f46db2208259def81cc51da3d068cbaf98b55b0003fffb72edc0eb1a19d7150653e28420f44e4242a059605336dcfae5554a322cf0612d6edae21b997ef5918a0c08404926cae70ad23ef93540cb7cba8d7b3f6fde278a304415c4abeea5dffd71d4dd0d05a3e429ef4211fa748c3c991679715358da548cb7ae41ca1a6f41a3de4c2f0209af9b3221f341771787d201554ec3f0cb09d0a76e8477bf26a104425d9434ca1149c65690fef1c4a446f3b3d84e08f4036bc2434990891e47e646e600568f2bf3417c2a781af0d4d8bbf62eacbb8df8d18c3854aac32029c3ffbc2eccf05da5f872f271f065e966ca8f971f0bd5de85a9572110767832a6cc1890549b12007b3ef52801e862657e99f91eda950be10c1fdd7812863130cdd2af4323a763b81ac144fdf13bb3dbb5823c242392feb8105ea576e9d2900d6009ec86412937cf7b98e303beb4e62f149c8ae3d30d1235e33523d0cce0a750411852120a041134b7ecd61cad42b316903a560b15c5aabcf41dc9a104852c58f2ce2f36e261e01245482df5fa8d2ba368321b6a20a031cd37e5a528f10863113d028a0461d9ebe094e4e2278cbb28be1c0a3d1fbcc9df0a15a976e9aee737fe99c767c1f98e7dfd0ba2b4f29048493355e8d793d051a9d4b9c37096f",
#     "code_verifier": "ycTfSDiQwyiia1pY02XQC2KG9pD_yWowBtGca82krgyr4aTuPsDmpvW1tSYHI0OJK85C-hRNFAJQoFQwNYhBTHs1xsayHaJAm-OgALkKNs2mjSvDs3ZBIAtzs3R4T-Uw",
#     "grant_type": "authorization_code"
# }

# response = requests.post(url, data=payload)

# print(response.json())


# import secrets

# def get_new_code_verifier() -> str:
#     token = secrets.token_urlsafe(100)
#     return token[:128]

# code_verifier = code_challenge = get_new_code_verifier()

# print(len(code_verifier))
# print(code_verifier)