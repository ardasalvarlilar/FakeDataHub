import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'

export default function ExampleFetch() {
  const [copied, setCopied] = useState(false);
  const fetchCode = `
    const request = await axios.get('https://dummy-data-api-production.up.railway.app/users');
    const response = request.data;
  `;
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className='px-6 py-2 md:px-24 md:py-8 bg-slate-200'>
      <h1 className='mb-2 text-lg font-bold text-center md:mb-4 md:text-3xl'>Lorem ipsum data can not satisfy anymore?</h1>
      <p>FakeDataHub allows you to practice real-life asynchronous operations by making requests to different endpoints. It provides the opportunity to develop without the need for a backend, using your preferred frontend framework. This can be particularly useful if you are conducting educational sessions🙃, teaching the intricacies of frontend development, including asynchronous operations using fetch.</p>
      <h3 className='my-1 text-lg font-bold md:my-3'>Example useage with axios</h3>
      <pre className='px-1 py-3 overflow-auto text-xs text-white bg-black rounded-sm md:text-lg'>
        <code>
          <span className='text-[#f89a28]'>const</span> <span className='text-[#fff]'>request</span> = <span className='text-[#f89a28]'>await</span> <span className='text-[#DC84F3]'>axios</span>
          <span className='text-[#fff]'>.get</span><span className='text-[#f89a28]'>(</span><span className='text-green-600'>"https://dummy-data-api-production.up.railway.app/users"</span><span className='text-[#f89a28]'>)</span><br />
          <span className='text-[#f89a28]'>const</span> <span className='text-[#fff]'>response</span> = <span className='text-[#DC84F3]'>request</span>.<span className='text-[#F3CCF3]'>data</span>
        </code>
      </pre>

      <div className='flex items-center gap-4'>
        <CopyToClipboard text={fetchCode} onCopy={handleCopy}>
          <button className='border border-[#f89a28] rounded-md px-3 py-1 my-2 hover:bg-[#f89a28] hover:text-white hover:border-black transition-all'>Copy</button>
        </CopyToClipboard>
        {copied && <p className='m-0 text-green-600'>Copied to clipboard!</p>}
      </div>
    </div>
  )
}
