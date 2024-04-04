export default function RouteTheme() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Theme</h1>
      <h2 className="text-3xl font-semibold mb-4">Buttons</h2>
      <div>
        <button className="btn">Button</button>
      </div>
      <div className="mb-4" />
      <div>
        <button className="btn btn-sm">Small</button>{' '}
        <button className="btn">Normal</button>{' '}
        <button className="btn btn-lg">Large</button>{' '}
        <button className="btn btn-xl">Extra Large</button>
      </div>
      <div className="mb-4" />
      <div>
        <button className="btn btn-sm btn-filled">Filled Small</button>{' '}
        <button className="btn btn-filled">Filled Normal</button>{' '}
        <button className="btn btn-lg btn-filled">Filled Large</button>{' '}
        <button className="btn btn-xl btn-filled">Filled Extra Large</button>
      </div>
      <div className="mb-4" />
      <div>
        <button className="btn btn-sm">
          Small
          <br />
          Multiline
        </button>{' '}
        <button className="btn">
          Normal
          <br />
          Multiline
        </button>{' '}
        <button className="btn btn-lg">
          Large
          <br />
          Multiline
        </button>{' '}
        <button className="btn btn-xl">
          Extra Large
          <br />
          Multiline
        </button>
      </div>
      <div className="mb-4" />
      <div className="rounded-md bg-neutral-600 p-6">
        <button className="btn btn-white">White</button>{' '}
        <button className="btn btn-filled btn-white">Filled White</button>
      </div>
    </div>
  );
}
