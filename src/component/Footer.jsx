import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
      <div class="heading_section bg-red-600 text-gray-300">
                <div class="footer w-5/6 mx-auto text-center">
                    <div class="sub flex-1 p-8">
                        <div class="text-3xl mb-3 uppercase">Contact Us</div>
                        <div class="info">
                            <div class="name">Pizza Parlour</div>
                            <div class="name text-sm">
                                Street 4996 Brown Bear Drive <br />
                                City Mira Loma State CA State Full California <br />
                                Zip Code 91752 <br />
                                Phone Number 951-634-4557 <br />
                                Mobile Number 951-903-8940
                            </div>
                        </div>
                    </div>
                    <div class="sub flex p-5 w-5/6 mx-auto border-t">
                        <div class="cursor-pointer hover:underline items mx-auto">Our Parterners</div>
                        <div class="cursor-pointer hover:underline items mx-auto">Policy</div>
                        <div class="cursor-pointer hover:underline items mx-auto">Facilities</div>
                        <div class="cursor-pointer hover:underline items mx-auto">Developer</div>
                    </div>
                </div>
            </div>
      </footer>
    </>
  )
}

export default Footer
