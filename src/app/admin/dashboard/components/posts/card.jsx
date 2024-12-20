import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { CiEdit, CiTrash, CiWarning, CiLink } from 'react-icons/ci';
import TagList from './tagList';
import { deletePost } from '../../actions';
import Modal from '@/components/modal';
import Button from '@/components/button';
import { toast } from 'react-toastify';

export default function Card({
	id,
	thumbnail,
	title,
	tags,
	slug,
	views,
	status
}) {
	const [tagsOpen, setTagsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
    
    const router = useRouter();

    async function handleDelete(id) {
        setIsLoading(true)
        try {
            await deletePost(id)
            
			router.refresh();
        } catch(err) {
			toast.error('Error al eliminar el post');
        } finally {
            setIsLoading(false)
        }
    }

	return <li key={`post-${id}`} className='bg-white border border-gray-200 rounded-lg flex overflow-hidden'>
		{
            thumbnail
                ? <div style={{ backgroundImage: `url(${thumbnail}&h=280&q=50)` }} className='w-48 h-48 bg-center bg-cover'/>
		        : <div className='w-48 h-48 bg-main-1 text-white text-4xl flex items-center justify-center'>
				    {!title ? 'N' : title[0].toUpperCase()}
			      </div>
		}
		<div className='flex flex-col w-[calc(100%-192px)] items-center p-2 gap-2'>
			<div className='w-full text-center'>
				<span className='text-xl'>{title ? title : '(New Post)'}</span>
			</div>
			<div className='flex-grow flex items-end justify-end w-full'>
				{
                    tags?.length > 0 &&
					<div className='flex gap-1'>
						<span className='bg-accent-1 text-white py-[1px] px-2 rounded-lg'>{tags[0]}</span>
						{
                            tags.length > 1 &&
							<button className='bg-accent-1 text-white py-[1px] px-2 rounded-lg' onClick={() => setTagsOpen(!tagsOpen)} onBlur={() => setTagsOpen(false)}>
                                {`+${tags.length - 1}`}
                            </button>
						}
					</div>
				}
			</div>
			<div className='w-full flex justify-between'>
				<div>
					<div className='flex items-center gap-1'>
						<BsEye className="w-6 h-6" />
						<span>{views}</span>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					{
						status === 'PUBLISHED' &&
						<button onClick={() => window.open(`/blog/${slug}`, '_blank')}>
							<CiLink className='w-6 h-6'/>
						</button>
					}
					{/*
						status === 'DRAFTED' &&
						<button onClick={() => window.open(`https://${blog.domain}/api/preview?id=${id}`, '_blank')}>
							<MdPreview className='w-6 h-6'/>
						</button>
					*/}
					<button onClick={() => router.push(`/admin/${id}`)}>
						<CiEdit className="w-6 h-6" />
					</button>
					<button onClick={() => setShowModal(true)}>
						<CiTrash className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
			{tagsOpen && <TagList tags={tags.slice(1)} />}

            <Modal
				isOpened={showModal}
				onClose={() => setShowModal(false)}
				w={'480px'}
			>
				<div className="w-full flex flex-col items-center">
					<CiWarning className="w-12 h-12" />
					<span className="text-center text-xl my-8">
						¿Desea eliminar esta entrada?
					</span>
					<div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2">
						<Button
							className="border border-gray-100 hover:bg-gray-100"
							onClick={() => setShowModal(false)}
							disabled={isLoading}
						>
							Cancelar
						</Button>
						<Button
							className="border border-red-500 justify-center text-red-500 flex items-center hover:bg-red-500 hover:text-white"
							onClick={() => toast.promise(handleDelete(id), {
								pending: 'Eliminando...',
								success: 'Entrada eliminada correctamente',
								error: 'Error al eliminar la entrada'
							})}
							disabled={isLoading}
						>
							<CiTrash className="w-6 h-6" />
							<span>Eliminar</span>
						</Button>
					</div>
				</div>
			</Modal>
	</li>
};
