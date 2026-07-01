const colors = [ "White", "Black", "Brown", "Yellow", "Red"]
export const getColors = (req, res) => {
  return res.send({
    status: true,
    colors
  })
}