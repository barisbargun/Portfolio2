export const sendEmail = async (post: IEmail): Promise<IResponse> => {
  const res = await fetch(`/api`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    credentials:'include',
    body: JSON.stringify(post)
  })
  const result: IResponse = {
    status: res.status,
    message: (await res.text())
  }
  return result;
}