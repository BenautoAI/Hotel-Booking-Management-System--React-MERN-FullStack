import { Button } from "../components/ui/button"

const BlueButtonDemo = () => {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blue Button Demo</h1>
        
        <div className="bg-white rounded-lg shadow-medium p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Blue Button Variant</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="blue">Blue Button</Button>
              <Button variant="blue" size="sm">Small Blue</Button>
              <Button variant="blue" size="lg">Large Blue</Button>
              <Button variant="blue" disabled>Disabled Blue</Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">All Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="blue">Blue</Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="blue" size="sm">Small</Button>
              <Button variant="blue" size="default">Default</Button>
              <Button variant="blue" size="lg">Large</Button>
              <Button variant="blue" size="icon">🔵</Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Usage Example</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <code className="text-sm">
                {`<Button variant="blue">Click Me</Button>`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueButtonDemo
