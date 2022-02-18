import Subnav from '@hashicorp/react-subnav'
import Link from 'next/link'
import navMenuItems from 'data/primary-navigation.js'

export default function DefaultSubnav() {
  return (
    <Subnav
      titleLink={{ text: 'HashiCorp Terraform', url: '/' }}
      ctaLinks={[
        { text: 'Download CLI', url: '/downloads' },
        {
          text: 'Terraform Cloud',
          url: 'https://cloud.hashicorp.com/products/terraform',
          theme: {
            brand: 'terraform',
          },
        },
      ]}
      menuItems={navMenuItems}
      menuItemsAlign="right"
      constrainWidth
      Link={Link}
    />
  )
}
